import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Confirm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const activate = async () => {
    console.log(id)
    let res = await fetch("http://127.0.0.1:8000/auth/activate/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate('/')
  };
  useEffect(() => {
    activate();
  }, []);
  return (
    <div>
    </div>
  );
}

export default Confirm;