'use Client'
import React from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";


export const Register = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="space-y-4 w-[300px]">
      <div className="div">
        <Select
          color={"secondary"}
          label="Favorite Animal"
          placeholder="Select an animal"
          selectionMode="multiple"
          className="max-w-xs"
        >
          <SelectItem key="1" value="Ahh">
            ผู้ใช้งานเว็บบอร์ด
          </SelectItem>
        </Select>
      </div>{" "}
      <div className="div">
        <Input
          type="text"
          color={"secondary"}
          label="ชื่อผู้ใช้งาน"
          placeholder="Enter username"
          className="max-w-[300px] "
        />
      </div>
      <div className="div">
        <Input
          type="text"
          color={"secondary"}
          label="Password"
          placeholder="Enter password"
          className="max-w-[300px] w-[300px]"
        
        />
      </div>
    </div>
  );
};
