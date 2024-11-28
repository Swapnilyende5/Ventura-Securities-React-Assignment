import React from "react";
import "./IpoListPage.css";
import ListPageTitle from "../ListPageTitle";
import { Link } from "react-router-dom";
import { listTableSchema } from "../Schema/ListTableSchema";

const IpoListPage = () => {
  return (
    <>
      <ListPageTitle title="IPO List Page" />
      <div>
        <table>
          <thead>
            <tr>
              <th className="secondaryText">Company / Issue date</th>
              <th className="secondaryText centerText">Issue size</th>
              <th className="secondaryText centerText">Price range</th>
              <th className="secondaryText centerText">Min invest/qty</th>
            </tr>
          </thead>
          <tbody>
            {listTableSchema.map((row, index) => (
              <tr key={index}>
                <td className="issueDate">
                  <Link style={{ textDecoration: "none" }} to={row.link}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={row.logo}
                        alt={`${row.company}Logo`}
                        style={{ marginRight: "10px" }}
                      />
                      <div>
                        <p className="primaryText">{row.company}</p>
                        <p className="secondaryText">{row.issueDate}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="primaryText centerText">{row.issueSize}</td>
                <td className="primaryText centerText">{row.priceRange}</td>
                <td>
                  <p className="primaryText centerText">{row.minInvestment}</p>
                  <p className="secondaryText centerText">
                    {row.minInvestmentDate}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IpoListPage;
