import '../estilos/formulario.css';
import React, {useState} from 'react';
import { Container, Row, Col, Card, Label, Input, Button, ButtonGroup } from 'reactstrap';
import {setCampo} from '../actions/index';
import {connect} from 'react-redux';

const Principal =(props) => {

  const [trigger, setTrigger] = useState(false);
  const toggle = () => setTrigger(!trigger);


    const handleSelectSimple=(e)=>{
        console.log(e.target.name, e.target.value)
        const result=e.target.name.split("-")
        console.log(result)
        let arrayCampo=props.campoForm
        switch(result[0]){
          case "tipoCampo":
            arrayCampo[parseInt(result[1])]={...arrayCampo[parseInt(result[1])],tipoCampo:e.target.value}

            break;
          case "propCampo":
            arrayCampo[parseInt(result[1])]={...arrayCampo[parseInt(result[1])],propCampo:e.target.value}
            break;
          case "limiteCampo":
            arrayCampo[parseInt(result[1])]={...arrayCampo[parseInt(result[1])],limiteCampo:e.target.value}
            break;
          case "opcionCampo":
            arrayCampo[parseInt(result[1])]={...arrayCampo[parseInt(result[1])],opcionCampo:e.target.value}
            break;
          case "labelCampo":
            arrayCampo[parseInt(result[1])]={...arrayCampo[parseInt(result[1])],labelCampo:e.target.value}
            break;
          default:
            break;
        }
    }
    const agregarCampo=()=>{
      console.log("mas", props.campoForm)
      let array=props.campoForm
      array.push({
        tipoCampo:"text",
        propCampo:"",
        opcionCampo:"Opcional",
        limiteCampo:"50",
        labelCampo:"-",
      })
      //array.push({})
      props.setCampo(array)
      toggle()
    }
    const quitarCampo=()=>{
      if(props.campoForm.length!=1){
        console.log("menos",props.campoForm)
        let array=props.campoForm
        array.pop()
        props.setCampo(array)
        toggle()
      }
    }

    const casillas=props.campoForm.map((item,i)=>
    <Card className="tarjeton" key={i}>
             <Row >
          <Col xs="12" md="4" lg="4">
          <Label for={`tipoCampo-${i}`}>Tipo de campo</Label>
          {!item.tipoCampo?<Input  type="select" name={`tipoCampo-${i}`} id={`tipoCampo-${i}`} onChange={handleSelectSimple}>
              
              <option value="text">texto</option>
              <option value="email">email</option>
              <option value="number">numerico</option>
              <option value="date">fecha</option>
              <option value="textarea">grande</option>
            </Input>:<Input  type="select" name={`tipoCampo-${i}`} id={`tipoCampo-${i}`} onChange={handleSelectSimple} defaultValue={item.tipoCampo}>
              
            <option value="text">texto</option>
            <option value="email">email</option>
            <option value="number">numerico</option>
            <option value="date">fecha</option>
            <option value="textarea">grande</option>
            </Input>}
          </Col>
        <Col xs="12" md="4" lg="4">
        <Label for={`propCampo-${i}`}>Restricciones</Label>
        {!item.propCampo?<Input  type="select" name={`propCampo-${i}`} id={`propCampo-${i}`} onChange={handleSelectSimple}>
              <option value=''>Sin restricción</option>
              <option value='^[A-zÀ-ž ]+$'>Solo letras</option>
              <option value='^[A-zÀ-ž0-9 ]+$'>Letras y números</option>
              <option value='^[0-9 ]+$'>Solo número entero</option>
              <option value='^[0-9]+([.][0-9]{0,2})?$'>Número decimal</option>
              
            </Input>:<Input  type="select" name={`propCampo-${i}`} id={`propCampo-${i}`} onChange={handleSelectSimple} defaultValue={item.propCampo}>
            <option value=''>Sin restricción</option>
              <option value='^[A-zÀ-ž ]+$'>Solo letras</option>
              <option value='^[A-zÀ-ž0-9 ]+$'>Letras y números</option>
              <option value='^[0-9 ]+$'>Solo número entero</option>
              <option value='^[0-9]+([.][0-9]{0,2})?$'>Número decimal</option>
              
            </Input>}
          </Col>

          <Col xs="12" md="4" lg="4">
        <Label for={`opcionCampo-${i}`}>Prioridad</Label>
        {!item.opcionCampo?<Input  type="select" name={`opcionCampo-${i}`} id={`opcionCampo-${i}`} onChange={handleSelectSimple}>
              <option value={false}>Opcional</option>
              <option value={true}>Obligatorio</option>              
            </Input>:<Input  type="select" name={`opcionCampo-${i}`} id={`opcionCampo-${i}`} onChange={handleSelectSimple} defaultValue={item.opcionCampo}>
            <option value={false}>Opcional</option>
              <option value={true}>Obligatorio</option>             
            </Input>}
          </Col>
          
          <Col  xs="12" md="6" lg="6">
          <Label for={`limiteCampo-${i}`}>Limite de carácteres: </Label>
          {!item.limiteCampo?<Input placeholder="Limite" name={`limiteCampo-${i}`} id={`limiteCampo-${i}`} min={0} max={50} type="number" step="1" onChange={handleSelectSimple}/>:
          <Input placeholder="Amount" name={`limiteCampo-${i}`} id={`limiteCampo-${i}`} min={0} max={150} type="number" step="1" onChange={handleSelectSimple} placeholder={item.limiteCampo}/>}
          
          </Col>
          <Col xs="12" md="6" lg="6">
          <Label for={`labelCampo-${i}`}>Label del campo: </Label>
          {!item.labelCampo?<Input placeholder="Label" name={`labelCampo-${i}`} id={`labelCampo-${i}`}  type="text" onChange={handleSelectSimple}/>:
          <Input placeholder="Amount" name={`labelCampo-${i}`} id={`labelCampo-${i}`} type="text"  onChange={handleSelectSimple}  placeholder={item.labelCampo}/>}
          </Col>
        </Row>                     
    </Card> 

          
    ) 
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                <h1 className="texto-titulo">DISEÑA TU FORMULARIO</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="12" lg="12">
                  <h3 className="texto-titulo">Escoge cuantos campos va a tener tu formulario y las opciones para cada campo que implementarás en tu formulario: </h3>
                </Col>
              </Row>


              <Row>
                <Col xs={{ size: '12', offset: 2 }} md={{ size: '12', offset: 4 }}>
                <ButtonGroup id="sumar" size="sm">
                  <Button  onClick={quitarCampo}  color="danger">-</Button>
                  <Input bsSize="sm" value={props.campoForm.length} disabled/>
                  <Button  onClick={agregarCampo}  color="danger">+</Button>
                </ButtonGroup>
                </Col>
              </Row>
              
              <br/>
              {casillas} 
              <vr/>
              <Row>
                <Col xs="12" md="12" lg="12">
                  <h3 className="texto-titulo">Puedes validar cliqueando en el menú superior "Testear Formulario"</h3>
                </Col>
              </Row>
        </Container>
    
    </div>
  );
}
const mapStateToProps = state => {
  return{
    campoForm:state.campos,
  }
  
}

const mapDispatchToProps = {
  setCampo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
