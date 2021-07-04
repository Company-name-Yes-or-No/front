const Home = (props) => {
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

export const getStaticProps = async () => {
  const response = await fetch("http://api:3000/companies", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      companies: json
    },
  };
}

export default Home;
