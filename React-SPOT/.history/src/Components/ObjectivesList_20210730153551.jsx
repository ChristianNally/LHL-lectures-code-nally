import Objective from "./Objective";

const ObjectivesList = (props) => {
  console.log("ObjectivesList function executed. props.objectives.length=" + props.objectives.length);
  return (
    <table>
      <colgroup>
      <col style=style={{width: 10%}}/>
      <col style=style={{width: 10%}}/>
      <col style=style={{width: 10%}}/>
      <col style=style={{width: 10%}}/>
      </colgroup>
      <tbody>
        {
          props.objectives.map( (obj,index) => {
            return <Objective 
              key={obj.id} 
              {...obj}
            />
          })
        }
      </tbody>
    </table>
  );
};

export default ObjectivesList;