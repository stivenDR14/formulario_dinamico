import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import '../estilos/formulario.css';
import {connect} from 'react-redux';
import { AvField, AvForm, FormGroup} from 'availity-reactstrap-validation';

function Test(props) {

  useEffect(()=> {
    console.log("lo que proviene:",props.campoForm)
    
},[])
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = (event, erroresAvField, valoresAvField)=> {
    console.log("validando",erroresAvField, valoresAvField)
    if(erroresAvField.length==0)toggle()
    
  }


  const campos=props.campoForm.map((item,i)=>
  <Row key={i}>
    <Col xs={{ size: '12', offset: 0 }} md={{ size: '10', offset: 2}}>
    <AvField name={`campo-${i}`} label={item.labelCampo} type={item.tipoCampo} errorMessage="Entrada no valida" validate={{
          required: {value: item.opcionCampo==="true"?true:false},
          pattern: {value: item.propCampo},
          maxLength: {value: parseInt(item.limiteCampo)}
        }}/>
    </Col>
  </Row>)
  return (
    <div >
        <Container>
            <Row>
                <Col xs="12" md={{ size: '10', offset: 1 }}>
                <h1 className="texto-titulo">PRUEBA TU FORMULARIO</h1>
                </Col>
            </Row>
            <AvForm onSubmit={handleSubmit} >{campos}
            <br/>
            <Row >
                <Col  xs="12" md="12" lg={{ size: 8, offset: 4 }}>
                    <Button color="danger">Validar</Button>
                </Col>
              </Row>
              </AvForm>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Aviso</ModalHeader>
        <ModalBody>
          Las entradas son acordes a las especificaciones, ¡Bien hecho!. Creado por: <a href="https://bifrost-apps.com">Edgar Stiven Díaz Roa</a>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>Continuar</Button>
        </ModalFooter>
      </Modal>
    
    </div>
  );
}
const mapStateToProps = state => {
  return{
    campoForm:state.campos,
  }
  
}


export default connect(mapStateToProps, null)(Test);
