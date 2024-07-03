import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React from 'react';
import { Button } from 'react-scroll';

const Modal = ({description,feature1,feature2,feature3,setIsOpen,isOpen}) => {
  return (
    <Dialog open={isOpen} handler={() => setIsOpen(!isOpen)}>
              <DialogHeader>Overview:</DialogHeader>
              <DialogBody>
               {description}
              </DialogBody>
              <DialogHeader>Features:</DialogHeader>
              <DialogBody>
                <h2 className="text-gray-600">
                  <span
                    className="font-bold
              text-black"
                  >
                    1:
                  </span>{" "}
                  {feature1}
                </h2>
                <h2 className="text-gray-600">
                  <span
                    className="font-bold
              text-black"
                  >
                   2:
                  </span>{" "}
                  {feature2}
                </h2>
                <h2 className="text-gray-600">
                  <span
                    className="font-bold
              text-black"
                  >
                   3:
                  </span>{" "}
                  {feature3}
                </h2>
                 
              </DialogBody>
              <DialogHeader>Technology Used:</DialogHeader>
              <DialogBody>
                <h2 className="text-gray-600">
                  <span
                    className="font-bold
              text-black"
                  >
                    Frontend:
                  </span>{" "}
                  HTML,CSS3,TailwindCSS,Material Tailwind,React,React Router.
                </h2>
                <h2 className="text-gray-600">
                  <span
                    className="font-bold
              text-black"
                  >
                    Backend:
                  </span>{" "}
                  NodeJs,MongoDb,ExpressJs
                </h2>
                 
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => setIsOpen(false)}
                  className="mr-1 bg-red-300 text-white"
                >
                  <span>Close</span>
                </Button>
              </DialogFooter>
            </Dialog>
  );
};

export default Modal;