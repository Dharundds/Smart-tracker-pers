import { useState, useEffect } from "react";
import PEview from "../PEview";
import "./PEviews.css";
import "react-complex-tree/lib/style.css";
import Price from "../Price";
import {
  UncontrolledTreeEnvironment,
  ControlledTreeEnvironment,
  longTree,
  Tree,
  StaticTreeDataProvider,
} from "react-complex-tree";
import { useHistory } from "react-router";

const PEviews = ({ name }) => {
  const history = useHistory();

  const [pe, setPe] = useState([]);
  const [rsc, setRsc] = useState([]);
  const [acc, setAcc] = useState([]);
  const [focusedItem, setFocusedItem] = useState();
  const [expandedItems, setExpandedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);
  const PE_name = localStorage.getItem("myData");

  const [mapped, setMapped] = useState(false);
  useEffect(async () => {
    await fetch(`http://127.0.0.1:8000/accview/${name}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        setPe(res.PE);
        setRsc(res.RSC);
        setAcc(res.accounts);
        // console.log(res)
        // console.log(res.accounts);
      });
  }, []);

  return (
    <div>
      <h1>PE name: {PE_name}</h1>
      {Object.keys(acc).map((val, key) => (
        <div key={key}>
          <h1>Account Name :{val}</h1>
          {acc[val].map((i, key) => (
            <button
              key={key}
              onClick={() => {
                history.push({
                  pathname: "/caseview",
                  state: { name: i, pename: val },
                });
              }}
            >
              {i}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

//     .then((res) => {
//       var item1 = {
//         root: {
//           index: "root",
//           hasChildren: true,
//           children: [PE_name],
//           data: "Root item",
//         },

//         [PE_name]: {
//           index: PE_name,
//           hasChildren: true,
//           children: Object.keys(acc),
//           data: PE_name,
//         },
//       };
//       Object.keys(acc).map((val, key) => {
//         //uncomment the abv line after execution the code will work
//         setMapped(true);
//         item1[val] = {
//           index: val,
//           hasChildren: true,
//           children: acc[val],
//           data: val,
//         };
//       });
//       Object.keys(acc).forEach((e) => console.log(e));
//       console.log(item1);
//       setItems(item1);
//     });
// }, []);
// // items["child2"] = {
// //   index: "child2",
// //   data: "child item 2",
// // };

// if (mapped) {
//   console.log(items);
//   console.log(Object.keys(acc));

//   return (
//     <div className="container">
//       {mapped ? (
//         <UncontrolledTreeEnvironment
//           dataProvider={
//             new StaticTreeDataProvider(items, (item, data) => ({
//               ...item,
//               data,
//             }))
//           }
//           getItemTitle={(item) => item.data}
//           viewState={{}}
//         >
//           <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
//         </UncontrolledTreeEnvironment>
//       ) : null}
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// };

export default PEviews;
//  {/* <h1>PE name: {PE_name}</h1>
//         {Object.keys(acc).map((val, key) => (
//           <div key={key}>
//             <h1>Account Name :{val}</h1>
//             {acc[val].map((i, key) => (
//               <button
//                 key={key}
//                 onClick={() => {
//                   history.push({
//                     pathname: "/quote",
//                     state: { name: i, pename: val },
//                   });
//                 }}
//               >
//                 {i}
//               </button>
//             ))}
//           </div>
//         ))}
//         {/* {pe.length > 0 &&
//           pe.map((val, key) => (
//             <>
//               <PEview
//                 key={key}
//                 pename={val["PE_name"]}
//                 nickname={val["cnickname"]}
//               />
//             </>
//           ))}
//         <hr />
//         <hr />
//         {/* {nickname.map((element, key) => (
//           <h1 key={key}>{element}</h1>
//         ))} */}
//         {/* {rsc.length &&
//           rsc.map((val, key) => (
//             <div key={key}>
//               <h3>{val.resource_name}</h3>
//               <h4>{val.cost}</h4>
//             </div>
//           ))} */} */}
