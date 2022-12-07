import React from "react";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import Notice from "../../components/Notice";
import Table from "../../components/Table";
import Title from "../../components/Title";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Notice />
      <Title />
      <div className="bg-white py-[25px] px-5">
        <Form></Form>
      </div>
      <Table />
    </div>
  );
};

export default Home;
