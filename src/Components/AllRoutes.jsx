import React from "react";
import { Route, Routes } from "react-router-dom";
import { Appliances } from "../Pages/Appliances";
import { Cart } from "../Pages/Cart";
import { Furnishing } from "../Pages/Furnishing";
import { Furniture } from "../Pages/Furniture";
import { GiftCards } from "../Pages/GiftCards";
import { Help } from "../Pages/Help";
import { Home } from "../Pages/Home";
import { HomeDeco } from "../Pages/HomeDeco";
import { LampsLights } from "../Pages/LampsLights";
import { Login } from "../Pages/Login";
import { Mattresses } from "../Pages/Mattresses";
import { Modular } from "../Pages/Modular";
import { Wishlist } from "../Pages/Wishlist";




export const AllRoute = () => {
  
    return  <Routes>


    <Route   path="/"  element={<Home />} />
     <Route path="/furniture"element={<Furniture />} />
     <Route path="/homedeco"element={<HomeDeco />} />
     <Route path="/lampslighting"element={<LampsLights />} />
     <Route path="/furnishings"element={<Furnishing />} />
     <Route path="/mattresses"element={<Mattresses />} />
     <Route path="/appliances"element={<Appliances />} />
     <Route path="/modular"element={<Modular />} />
     <Route path="/giftcards"element={<GiftCards />} />
     <Route path="/cart"element={<Cart />} />
     <Route path="/login"element={<Login />} />
     <Route path="/wishlist"element={<Wishlist />} />
     <Route path="/help"element={<Help />} />


     </Routes>

};