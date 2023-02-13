import React, { useEffect, useState } from  'react';
import BarCharts from "./Bar-charts";
import LineCharts from "./Line-charts";
import AreaCharts from "./Area-charts";
import PieCharts from "./Pie-charts";
import axios from 'axios';
import {CSidebarFooter,CLink, CFooter,CRow, CCol,CSidebarToggler,CNavGroup,CBadge,CSidebar,CSidebarBrand,CSidebarNav,CNavbar,CCard,CContainer,CNavbarToggler,CCollapse,CNavbarNav,CNavItem,CNavLink,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider,CForm,CFormInput,CButton,CCardBody} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [data, setdata] = useState([]);
  const [visible, setVisible] = useState(false);


//fetchData was called in a useEffect hook with an empty dependency array, 
//indicating that the function is executed as soon as the App component is mounted.
  // Hook to load state data fetched from requests. 
useEffect(() => {
 
    const fetchData = async () => {
     
      try{
        
        const jsonData = await axios.get("http://127.0.0.1:8000/api/getData");
       
        setdata(jsonData.data);//data?.data

       
      } catch(error){
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (//data={data}
    <div style={{overflowX: "hidden" }}>
       
      

    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
       
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <div style={{width: "12%" }}></div>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Accueil
              </CNavLink>
            </CNavItem>
            
            <CNavItem>
              <CNavLink href="#">A propos de nous</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Produits</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">page1</CDropdownItem>
                <CDropdownItem href="#">page2</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Page3</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#">
                Nous contacter
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
           <div style={{width: "8%" }}></div>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder=" Je cherche . . ." />
            <CButton type="submit" color="success" variant="outline">
             chercher
            </CButton>
          </CForm>
          <div style={{width: "28%" }}></div>
         <CNavItem className="d-flex">
             <CNavLink href="#">Se deconnecter</CNavLink>
          </CNavItem>
        </CCollapse>
      </CContainer>
    </CNavbar>

  <CRow>



  <CSidebar>
    
  <CSidebarBrand>Dashboard</CSidebarBrand>
  <CSidebarNav>
    
    <CNavItem href="#">
      
      Achats
    </CNavItem>
    <CNavItem href="#">
      
      Fichiers
    </CNavItem>
    <CNavItem href="#">
      
      Messages
      <CBadge color="danger ms-auto">5</CBadge>
    </CNavItem>
     <CNavItem href="#">
      
      Paiement
    </CNavItem>
    <CNavGroup toggler="Parametres">
      <CNavItem href="#">
         Mon compte
      </CNavItem>
      <CNavItem href="#">
         Mes preferances
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
  <CSidebarFooter></CSidebarFooter>
</CSidebar>
 
  <CCol>

  <CRow>
    <CCol lg={6}>
      <CCard  className="border-light">
        <CCardBody><BarCharts data={data} /></CCardBody>
      </CCard>
    </CCol>
    
    <CCol lg={6}>
      <CCard className="border-light">
        <CCardBody><LineCharts data={data} /></CCardBody>
      </CCard>
    </CCol>
  </CRow>
    
    <CRow>
      <CCol lg={6}>
        <CCard className="border-light" >
        <CCardBody> <AreaCharts data={data} /></CCardBody>
      </CCard>
      </CCol>

      <CCol lg={6}>
        <CCard className="border-light">
        <CCardBody><PieCharts  data={data}/></CCardBody>
      </CCard>
      </CCol>
    </CRow>

    </CCol>
    
        </CRow>
       
       <CFooter>
  <div>
   
  </div>
  <div>
    <span>template</span>
    <CLink href="https://coreui.io">CoreUI</CLink>
  </div>
</CFooter>
 


     
    </div>
  );
}