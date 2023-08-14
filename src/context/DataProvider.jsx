import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchItemsAndImages } from '../helperFns';

const DataContext = createContext({
  fetchedLaptops: [],
  loadingLaptops: [],
  setLoadingLaptops() {},
  setFetchedLaptops() {},
  fetchedDesktops: [],
  loadingDesktops: [],
  setLoadingDesktops() {},
  setFetchedDesktops() {},
  fetchedMonitors: [],
  loadingMonitors: [],
  setLoadingMonitors() {},
  setFetchedMonitors() {},
  fetchedCustomPcs: [],
  loadingCustomPcs: [],
  setLoadingCustomPcs() {},
  setFetchedCustomPcs() {},
  loadingAllPrd: [],
  setLoadingAllPrd() {},
  allPrd: [],
});
DataContext.displayName = 'Data context';

function DataContextProvider({ children }) {
  const [fetchedLaptops, setFetchedLaptops] = useState([]);
  const [loadingLaptops, setLoadingLaptops] = useState(true);
  const [fetchedDesktops, setFetchedDesktops] = useState([]);
  const [loadingDesktops, setLoadingDesktops] = useState(true);
  const [fetchedMonitors, setFetchedMonitors] = useState([]);
  const [loadingMonitors, setLoadingMonitors] = useState(true);
  const [fetchedCustomPcs, setFetchedCustomPcs] = useState([]);
  const [loadingCustomPcs, setLoadingCustomPcs] = useState(true);
  const [loadingAllPrd, setLoadingAllPrd] = useState(true);
  const [allPrd, setAllPrd] = useState([]);

  useEffect(() => {
    setAllPrd([
      ...fetchedCustomPcs.slice(0, -1),
      ...fetchedDesktops.slice(0, -1),
      ...fetchedLaptops.slice(0, -1),
      ...fetchedMonitors.slice(0, -1),
    ]);
  }, [fetchedCustomPcs, fetchedDesktops, fetchedLaptops, fetchedMonitors]);

  useEffect(() => {
    fetchItemsAndImages('laptops')
      .then((data) => {
        const laptopData = Object.values(data);
        laptopData.push({
          mainImg: '/images/laptops/laptopMain.jpg',
          title: 'MSI Laptops',
          link: 'all-products/laptops',
        });
        setFetchedLaptops(laptopData);
        setLoadingLaptops(false);
      })
      .catch((error) => {
        console.error('Error fetching laptops:', error);
        setLoadingLaptops(false);
      });
  }, []);

  useEffect(() => {
    fetchItemsAndImages('desktops')
      .then((data) => {
        const desktopData = Object.values(data);
        desktopData.push({
          mainImg: '/images/desktops/desktops.jpg',
          title: 'Desktops',
          link: 'all-products/desktops',
        });
        setFetchedDesktops(desktopData);
        setLoadingDesktops(false);
      })
      .catch((error) => {
        console.error('Error fetching desktops:', error);
        setLoadingDesktops(false);
      });
  }, []);

  useEffect(() => {
    fetchItemsAndImages('monitors')
      .then((data) => {
        const monitorsData = Object.values(data);
        monitorsData.push({
          mainImg: '/images/monitors/monitors.jpg',
          title: 'Gaming Monitors',
          link: 'all-products/monitors',
        });
        setFetchedMonitors(monitorsData);
        setLoadingMonitors(false);
      })
      .catch((error) => {
        console.error('Error fetching monitors:', error);
        setLoadingMonitors(false);
      });
  }, []);

  useEffect(() => {
    fetchItemsAndImages('customPcs')
      .then((data) => {
        const customPcsData = Object.values(data);
        customPcsData.push({
          mainImg: '/images/pcs/customBuildsimg.jpg',
          title: 'Custom Builds',
          link: 'all-products/custom-pcs',
        });
        setFetchedCustomPcs(customPcsData);
        setLoadingCustomPcs(false);
      })
      .catch((error) => {
        console.error('Error fetching customPcs:', error);
        setLoadingCustomPcs(false);
      });
  }, []);

  const dataCtx = {
    loadingLaptops,
    fetchedLaptops,
    setFetchedLaptops,
    setLoadingLaptops,
    loadingDesktops,
    fetchedDesktops,
    setFetchedDesktops,
    setLoadingDesktops,
    loadingMonitors,
    fetchedMonitors,
    setFetchedMonitors,
    setLoadingMonitors,
    loadingCustomPcs,
    fetchedCustomPcs,
    setFetchedCustomPcs,
    setLoadingCustomPcs,
    setLoadingAllPrd,
    loadingAllPrd,
    allPrd,
  };

  return (
    <DataContext.Provider value={dataCtx}>{children}</DataContext.Provider>
  );
}

export default DataContextProvider;

export function useDataCtx() {
  return useContext(DataContext);
}
DataContextProvider.propTypes = {
  children: PropTypes.node,
};
