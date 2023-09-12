import { Component } from 'react';
import PropTypes from 'prop-types';

class LoaderData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { loadData } = this.props;
    this.setState({ isFetching: true });
    loadData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  render() {
    const { render } = this.props;
    return render(this.state);
  }
}

LoaderData.propTypes = {
  render: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
};

LoaderData.defaultProps = {
  loadData: () => {
    return Promise.reject();
  },
};

export default LoaderData;
