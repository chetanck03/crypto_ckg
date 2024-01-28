import React,{useState,useEffect,useContext} from "react";
import axios from "axios";
import {ethers} from "ethers";
import toast from "react-hot-toast";

// Internal Import
import {Header,Footer,Search,MovingSubmenu,Preloader,SideBar,Home,TradeTokens,TopExchangeTokens
,Networks,AddNetwork,Price,Login,Signup,Profile,Setting,AddTokenPair,Trading,Loader,} from "../components/index"
import {CONTEXT} from "../context/context"

const index = () => {
  const { TRADING_BOT } = useContext(CONTEXT)

  // State Variable
  const[activeComponent,setActiveComponent] = useState("Home")
  const[membershipType,setMembershipType] = useState("Premium")
  const[authBackEndID,setAuthBackEndID] = useState("")
  const[networks,setNetworks] = useState({})
  const[networkName,setNetworkName] = useState()

  // Notification
  const notifyError = (msg) => toast.error(msg,{duration:2000});
  const notifySuccess = (msg) =>toast.success(msg,{duration:2000});
  return (
    <div>
      <MovingSubmenu/>
      <Preloader/>
      {
        activeComponent == "Signup" ? (
          <Signup axios ={axios} setActiveComponent={setActiveComponent} 
          notifyError={notifyError} notifySuccess={notifySuccess} />
        ):(
          // Home
          <div className="techwave_fn_wrapper">
          <div className="techwave_fn_wrap">
            <Search/>
            <Header
            networkName={networkName}
            setActiveComponent={setActiveComponent}/>

            <SideBar
             setActiveComponent={setActiveComponent}
            />{
              activeComponent=="Home"?(
                <Home/>
              ):activeComponent=="Trade Tokens"?(
                <TradeTokens/>
              ):activeComponent=="Top Exchange Tokens"?(
                <TopExchangeTokens/>
              ):activeComponent=="Networks"?(
                <Networks networkName={networkName}
                setNetworkName={setNetworkName}/>
              ): activeComponent == "AddNetwork" ?(
                <AddNetwork/>
              ):activeComponent=="Trading"?(
                <Trading axios={axios}
                />
              ):activeComponent=="Pricing"?(
                <Price/>
              ):activeComponent=="Setting"?(
                <Setting/>
              ):activeComponent=="Add Token Pair"?(
                <AddTokenPair/>
              ):(
                ""
              )
            }
          </div>
        </div>
        )
      }
      {
        activeComponent=="Login"?(
          <Login setActiveComponent={setActiveComponent} axios = {axios} 
            notifyError={notifyError} notifySuccess={notifySuccess}/>
        ):(
          ""
        )
      }
    </div>
  )
};

export default index;
