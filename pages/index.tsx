import React, { FC } from "react";
import { GetStaticProps } from "next";

type Company = {
  id: number;
  name: string;
}

type Props = {
  companies: Company[];
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
      <table>
        {props.companies.map((company) =>
          <tr>
            <td>{company.id}.</td>
            <td>{company.name}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("http://api:3000/companies", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      companies: json
    },
  };
}

export default Home;
