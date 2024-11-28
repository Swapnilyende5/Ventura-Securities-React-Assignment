import React from 'react'
import { tableData } from '../../Schema/TableSchema'

const Details = () => {
  return (
    <div className="ipo-details">
          <p style={{ marginBottom: "13px" }} className="primaryText">
            IPO details
          </p>
          <div className="detail">
            <table>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} style={{ border: "none" }}>
                      <p className="secondaryText">{cell.label}</p>
                      <p className="primaryText">{cell.value}</p>
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
  )
}

export default Details
