import {useState, useEffect } from "react";
import PropTypes from "prop-types";


const LoaderData = () => {
  const [data, ] = useState([]);
  const [isFetching, ] = useState(false);
  const [error, ] = useState(null);

  const { render } = this.props;

  useEffect(() => {
    load();
  }, []);

  const load = () => {
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
   
  return render(data, isFetching, error);
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
