import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bigContainer:{
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfcff',
  },
  boton : {
    margin: 10,
    width: '100%',
    height: '8%'
  },
  botonGuardar : {
    justifyContent: 'center',
    backgroundColor: "#c44536",
    width: '100%',
    height: '10%'
  },
  bienvenido:{
     alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginTop: 5
  },
  rectangle:{
    backgroundColor: '#19727850',
    padding: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxes:{
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center'
    },
  logoContainer : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo : {
    width: '40%',
    height: '40%',
  },
  backgroundImage:{
    flex: 1,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spinner:{
      marginTop: 15
  },
  addButton: {
    backgroundColor: '#c44536',
    borderColor: '#c44536',
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  formText:{
     alignItems: 'center', justifyContent: 'center', color: '#000', marginTop: 5
  },
  formTextInput:{
     alignItems: 'center', justifyContent: 'center', color: '#000', marginTop: 5
  },
  pickerStyle:{
    height: 40, width: '80%', color: '#FFFFFF', alignItems:'center'
  },
  itemConsult:{
    flex: 1,
    backgroundColor: '#19727850',
    flexDirection:'row'
  },
  containerList : {
    flex: 1,
  },
  tipoCliente : {
    backgroundColor: '#197278',
    color: "#FFFFFF",
    textAlign: 'center',
    fontSize: 30,
    borderRadius: 5,
  },
  infoContainer:{
    flex: 1,
  },
  nombreCliente : {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  telefonoCliente : {
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
  },
  buttonsModalClient:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cameraContainer:{
    flex : 2,
    flexDirection : 'column'
  },
  view:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture:{
    flex: 0,
    backgroundColor: '#197278',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#c44536',
    padding: 15,
    margin: 45
  },
  waittext:{
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  }
});
