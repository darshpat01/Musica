import { React, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
const formItemsStyle = "pb-4 w-[300px] text-white";

function SignUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex-col text-center">
          <div className={formItemsStyle}>
            <Input placeholder="Name" />
          </div>
          <div className={formItemsStyle}>
            <Input placeholder="Email" />
          </div>
          <div className={formItemsStyle}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? (
                    <div className="text-black">
                      <BiHide />
                    </div>
                  ) : (
                    <div className="text-black">
                      <BiHide />
                    </div>
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <div>
            <div className="pb-2">
              <Button colorScheme="blue">Sign Up</Button>
            </div>
            <div className="text-blue-400 font-semibold hover:underline">
              <Link to="/signin">
                <p>Go to SignIn</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
