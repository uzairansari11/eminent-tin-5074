import {
  Avatar,
  Box,
  Flex,
  Tag,
  TagLabel,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartCard } from "../Components/CartCard";
import CheckoutForm from "../Components/checkout/CheckoutForm";
import {
  deleteCartApi,
  getCartRequest,
  updateCartApi,
} from "../Redux/cart/api";

const Cart = () => {
  const toast = useToast();
  const allCartData = useSelector((store) => store.cartReducer.cartItem);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

let totalAmountFromApi = 0;
allCartData.forEach(
    (cartItem) =>
      (totalAmountFromApi =
        totalAmountFromApi + cartItem.quantity * cartItem.price)
  );

  const deleteHandler = (itemid) => {
    let newCart = allCartData.filter((ele) => {
      return ele.id !== itemid;
    });
    dispatch(deleteCartApi(id, newCart));
    toast({
      title: "Deleted Successfully",
      description: "Product deleted from cart",
      variant: "subtle",
      status: "success",
      position: "top-right",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleUpdateQuantity = (value, itemid) => {
    console.log(value);
    let newCart = allCartData.map((ele) => {
      return ele.id === itemid
        ? { ...ele, quantity: ele.quantity + value }
        : ele;
    });
    console.log("newcartttt", newCart);
    dispatch(updateCartApi(id, newCart));
  };

  const handleBuyNow = (itemid) => {
    console.log(itemid);
  };



  useEffect(() => {
    if (id) {
      dispatch(getCartRequest(id));
    }
  }, []);

  console.log(allCartData);
  return (
    <Box mt='2' >
    <Flex justifyContent="space-between"  >
      <Box
        alignItems={"left"}
        w="50%"
        mt='2'
      >
        {allCartData.length ? (
          allCartData.map((cartItem) => (
            <CartCard
              key={cartItem.id}
              item={cartItem}
              deleteHandler={deleteHandler}
              handleUpdateQuantity={handleUpdateQuantity}
              handleBuyNow={handleBuyNow}
              totalAmountFromApi={totalAmountFromApi}
            />
          ))
        ) : (
          <Tag
            size="lg"
            bg="#ec892a"
            m="auto"
            borderRadius="full"
            mt="10"
            mb="10"
            color={"white"}
            justifyContent={"space-around"}
          >
            <Avatar
              src="https://cdn3d.iconscout.com/3d/premium/thumb/cart-5590712-4652404.png"
              size="xs"
              name="Cart is Empty !"
              ml={-1}
              mr={2}
            />
            <TagLabel>Cart is Empty!</TagLabel>
          </Tag>
        )}
      </Box>

      <Box w="50%">

      {allCartData.length?<CheckoutForm totalAmountFromApi={totalAmountFromApi} />:""}
        



      </Box>
    </Flex>
    </Box>
  );
};

export default Cart;
