// import { Badge, Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { addToCart, CartQuantity, deleteCart, GetCart } from '../redux/App/action'
// import { DeleteIcon } from '@chakra-ui/icons';


// function CardBox({ props }) {
//     let dispatch = useDispatch()

//     let cart = useSelector((state) => {
//         return state.AppReducer.cart
//     })

//     // ----when item adding first time to cart-------//
//     let addCartItem = (data) => {
//         data.quantity = 1
//         dispatch(addToCart(data))
//         let t = 0
//         for (let i = 0; i < cart.length; i++) {
//             t += cart[i].quantity
//         }

//         if (t === 0) {
//             localStorage.setItem("total", 1)
//         } else {
//             console.log(t)
//             localStorage.setItem("total", t + 1)
//         }
//     }

//     // ---------debouncing for increament cart quantity---------//
//     let id
//     let dbounceinc = (data) => {
//         if (id) {
//             clearTimeout(id)
//         }
//         id = setTimeout(() => {
//             handleIncreament(data)
//         }, 1000)
//     }

//     // --------------increamenting cart quantity-------------//
//     let handleIncreament = (data) => {
//         let ans = cart.find((el) => el.id == data.id)
//         ans.quantity++
//         dispatch(CartQuantity(ans))
//         let t = 0
//         for (let i = 0; i < cart.length; i++) {
//             t += cart[i].quantity
//         }
//         localStorage.setItem("total", t)
//     }

//     // ---------debouncing for decreament cart quantity---------//
//     let id1
//     let dbouncedec = (data) => {
//         if (id1) {
//             clearTimeout(id1)
//         }
//         id1 = setTimeout(() => {
//             handleDecreament(data)
//         }, 1000)
//     }

//     // --------------decreasing cart quantity-------------//
//     let handleDecreament = (data) => {
//         let ans = cart.find((el) => el.id == data.id)
//         console.log(ans.quantity)
//         if (ans.quantity > 1) {
//             ans.quantity--
//             dispatch(CartQuantity(ans))
//             let t = 0
//             for (let i = 0; i < cart.length; i++) {
//                 t += cart[i].quantity
//             }
//             localStorage.setItem("total", t)
//         } else {
//             dispatch(deleteCart(ans))
//             let x = localStorage.getItem("total")
//             if (x !== 1 && ans.quantity == 1) {
//                 localStorage.setItem("total", x - 1)
//             }
//             if (x == 1) {
//                 localStorage.removeItem("total")
//             }
//         }
//     }

//     // ------check for cart quantity----------//
//     let checkQuantity = (data) => {
//         let ans = cart.find((el) => el.id == data.id)
//         return ans.quantity
//     }

//     // ------------------------------------------//
//     useEffect(() => {
//         dispatch(GetCart())
//     }, [cart.length])

//     // Add animation effect
//     const fadeInAnimation = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//     }

//     return (
//         <Box
//             boxShadow={"md"}
//             h={{ base: "460px", sm: "440px", md: "425px", lg: "420px", xl: "400px" }}
//             borderRadius={"10px"}
//             display="flex"
//             flexDir={"column"}
//             justifyContent={"space-between"}
//             animate={{ opacity: 1 }}
//             initial="hidden"
//             variants={fadeInAnimation}
//             bgColor={"#FED7E2"} // Background color
//             p={4} // Add padding
//         >
//             <Box h={"60%"} width={"60%"}  margin={"auto"}   >
//                 <Image borderRadius={"10px"} h={"100%"} w={"100%"} src={props.image} />
//             </Box>
//             <Stack h={"30%"} p={2}>
//                 <Box><Text>{props.title}<Badge color={"blue"}>{props.category}</Badge></Text> </Box>
//                 <Box><Text>Rating: {props.rating.rate}</Text></Box>
//                 <Box><Text>Price: ₹{props.price}</Text></Box>
//             </Stack>
//             <Box p={2}>
//                 {cart.length > 0 && cart.find((el) => el.id === props.id) !== undefined ?
//                     <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={3}>
//                         <Button bgColor={"#D11243"} color={"white"} onClick={() => dbouncedec(props)}>-</Button >
//                         <Text>{checkQuantity(props)}</Text>
//                         <Button bgColor={"#D11243"} color={"white"} onClick={() => dbounceinc(props)}>+</Button>
//                     </Box>
//                     :
//                     <Button bgColor={"#D11243"} color={"white"} onClick={() => addCartItem(props)}>Add to cart</Button>}
//             </Box>
//         </Box>
//     )
// }

// export default React.memo(CardBox)

import { Box, Button, Image, Stack, Text, Badge } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, CartQuantity, deleteCart, GetCart } from '../redux/App/action';

function CardBox({ props }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.AppReducer.cart);

  useEffect(() => {
    dispatch(GetCart());
  }, [cart.length, dispatch]);

  const addCartItem = (data) => {
    data.quantity = 1;
    dispatch(addToCart(data));
    let total = cart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('total', total + 1);
  };

  const handleIncrement = (data) => {
    let item = cart.find((el) => el.id === data.id);
    item.quantity++;
    dispatch(CartQuantity(item));
    let total = cart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('total', total);
  };

  const handleDecrement = (data) => {
    let item = cart.find((el) => el.id === data.id);
    if (item.quantity > 1) {
      item.quantity--;
      dispatch(CartQuantity(item));
      let total = cart.reduce((acc, item) => acc + item.quantity, 0);
      localStorage.setItem('total', total);
    } else {
      dispatch(deleteCart(item));
      let total = cart.reduce((acc, item) => acc + item.quantity, 0);
      localStorage.setItem('total', total - 1);
    }
  };

  const checkQuantity = (data) => {
    let item = cart.find((el) => el.id === data.id);
    return item.quantity;
  };

  return (
    <Box boxShadow="md" h="400px" borderRadius="10px" display="flex" flexDir="column" justifyContent="space-between" bgColor="#FED7E2" p={4}>
      <Box h="60%" width="60%" margin="auto">
        <Image borderRadius="10px" h="100%" w="100%" src={props.image} />
      </Box>
      <Stack h="30%" p={2}>
        <Box>
          <Text>
            {props.title} <Badge color="blue">{props.category}</Badge>
          </Text>
        </Box>
        <Box>
          <Text>Rating: {props.rating.rate}</Text>
        </Box>
        <Box>
          <Text>Price: ₹{props.price}</Text>
        </Box>
      </Stack>
      <Box p={2}>
        {cart.find((el) => el.id === props.id) ? (
          <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
            <Button bgColor="#D11243" color="white" onClick={() => handleDecrement(props)}>-</Button>
            <Text>{checkQuantity(props)}</Text>
            <Button bgColor="#D11243" color="white" onClick={() => handleIncrement(props)}>+</Button>
          </Box>
        ) : (
          <Button bgColor="#D11243" color="white" onClick={() => addCartItem(props)}>Add to cart</Button>
        )}
      </Box>
    </Box>
  );
}

export default React.memo(CardBox);
