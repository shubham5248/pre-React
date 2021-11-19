export default (props) =>{
    const{parentcomponent}=props;
    return (<>
     
    <h1>FirstChild 
        <h2>First Child Called From {parentcomponent}</h2>
    </h1>

    </>);
};