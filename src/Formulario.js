import React, {useState} from "react";
import { Field, Formik } from "formik";
import Table from "react-bootstrap/Table";
import { Form } from "formik";









const Formulario = () => {
const [formularioEnviado, cambiarFormularioEnviado] = useState(false);



  return (
    <>



      <Formik
        initialValues={{
          nombre: "",
          fecha_nacimiento: "",
          documento_identidad: "",
          telefono: "",
          correo: "",
          grupo_asignado: "",
          fecha_ingreso: "",
          trimestre_actual: "",
          trimestre_aprobado: "",
        }}

        




        validate={(valores) => {
          if(!valores.nombre)
          console.log('por favor un nombre');
          let errores = {};

          //validacion
          //nombre
          
          if  (!valores.nombre) {
            errores.nombre = "por favor ingresa un nombre"
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "el nombre solo puede tener letra y espacio"
          }

          //telefono
          if (!valores.telefono) {
            errores.telefono = "por favor ingresa tu numero telefonico"
          } else if (!/^\d{7,14}$/.test(valores.telefono)) {
            errores.telefono = "ingrese su numero telefonico"
          }

            //correo
            if (!valores.correo) {
              errores.correo = "por favor ingresa un correo electronico"
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
              errores.correo = "El nombre solo puede contener letras y espacios"
            }


             //fecha_nacimiento
             if (!valores.fecha_nacimiento) {
              errores.fecha_nacimiento = "por favor ingresa tu fecha de nacimiento"
             }
              
              //documento_identidad
             if (!valores.documento_identidad) {
              errores.documento_identidad = "por favor ingresa tu documento identidad"
             }

      


              //grupo_asignado
              if (!valores.grupo_asignado) {
                errores.grupo_asignado = "por favor ingresa tu grupo asignado"
               } 
  
               //fecha_ingreso
              if (!valores.fecha_ingreso) {
                errores.fecha_ingreso = "por favor ingresa tu fecha ingreso"
               } 
  

                  //trimestre_actua
              if (!valores.trimestre_actual) {
                errores.trimestre_actual = "por favor ingresa tu trimestre actual"
               } 

                      //trimestre_aprobado
              if (!valores.trimestre_aprobado) {
                errores.trimestre_aprobado = "por favor ingresa los trimestre aprobado"
               } 

              

          








          return errores;
        }}
        onSubmit={(valores,  { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(()=>cambiarFormularioEnviado(false), 5000);
          
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
         
         

         <Form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
            {
              //nombre
            }
            <div>
              <div><h1>FORMULARIO</h1></div>
              <label htmlFor="nombre">NOMBRE</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="felipe banguero"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>

            {
              //telefono
            }

            <div>
              <label htmlFor="telefono">TELEFONO</label>
              <input
                type="numero"
                id="telefono"
                name="telefono"
                placeholder="3000154706"
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.telefono && errors.telefono && <div className="error">{errors.telefono}</div>}
            </div>

            {
              // fecha_nacimiento
            }
            <div>
              <label htmlFor="fecha_nacimiento"> FECHA DE NACIMIENTO</label>
              <input
                type="text"
                id="fecha_nacimiento"
                name="fecha_nacimiento"
                placeholder="12/enero/1996"
                value={values.fecha_nacimiento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.fecha_nacimiento && errors.fecha_nacimiento && <div className="error">{errors.fecha_nacimiento}</div>}</div>

            {
              //documento_identidad
            }

            <div>
              <label htmlFor="documento_identidad">DOCUMENTO IDENTIDAD</label>
              <input
                type="numeros"
                id="documento_identidad"
                name="documento_identidad"
                placeholder="documento_identidad"
                value={values.documento_identidad}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.documento_identidad && errors.documento_identidad && <div className="documento_identidad">{errors.documento_identidad}
                </div>
              }
              <div>

                <label>
                  <Field type="radio" name="indetidad" value="cedula"/> Cedula
                </label>
                <label>
                  <Field type="radio" name="indetidad" value="tarjeta"/> Terjeta
                </label>
                <label>
                  <Field type="radio" name="indetidad" value="otro"/> Otros
                </label>
              </div>
            </div>

            {
              //correo
            }
            <div>
              <label htmlFor="correo">CORREO ELECTRONICO</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="cooreo@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                </div>

            {
              //grupo_asignado
            }
            <div>
              <label htmlFor="grupo_asignado">GRUPO ASIGNADO</label>
              <input
                type="text"
                id="grupo_asignado"
                name="grupo_asignado"
                placeholder="grupo_asignado"
                value={values.grupo_asignado}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.grupo_asignado && errors.grupo_asignado && (
                <div className="grupo_asignado">{errors.grupo_asignado}</div>
              )}
            </div>

            {
              //fecha_ingreso
            }
            <div>
              <label htmlFor="fecha_ingreso">FECHA INGRESO</label>
              <input
                type="tex-numero"
                id="fecha_ingreso"
                name="fecha_ingreso"
                placeholder="fecha_ingreso"
                value={values.fecha_ingreso}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.fecha_ingreso && errors.fecha_ingreso && (
                <div className="fecha_ingreso">{errors.fecha_ingreso}</div>
              )}
            </div>

            {
              //trimestre_actual
            }
            <div>
              <label htmlFor="trimestre_actual">TRIMESTRE ACTUAL</label>
              <input
                type="text"
                id="trimestre_actual"
                name="trimestre_actual"
                placeholder="trimestre_actual"
                value={values.trimestre_actual}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.trimestre_actual && errors.trimestre_actual && (
                <div className="trimestre_actual">
                  {errors.trimestre_actual}
                </div>
              )}
            </div>

            {
              //trimestre_aprobado
            }
            <div>
              <label htmlFor="trimestre_aprobado">TRIMESTRE APROBADO</label>
              <input
                type="text"
                id="trimestre_aprobado"
                name="trimestre_aprobado"
                placeholder="trimestre_aprobado"
                value={values.trimestre_aprobadol}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.trimestre_aprobado && (
                <div className="trimestre_aprobado">
                  {touched.trimestre_aprobado && errors.trimestre_aprobado}
                </div>
              )}
            </div>

                


            <button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">Formulario enviando con exito!</p>}

            








            Datos Ingresados
         

            <Table className="tabla"  striped bordered hover variant="dark">
              <thead>
              
                <tr>
                  <th>
                    <h4>Nombre</h4>
                  </th>
                  <th>
                    <h4> Fecha Nacimiento</h4>
                  </th>
                  <th>
                    <h4>Telefono</h4>
                  </th>
                  <th>
                    <h4>Documento</h4>
                  </th>
                  <th>
                    <h4>correos</h4>
                  </th>
                  <th>
                    <h4>Grupo asignado</h4>
                  </th>
                  <th>
                    <h4>Fecha ingreso</h4>
                  </th>
                  <th>
                    <h4>Trismestre actual</h4>
                  </th>
                  <th>
                    <h4>Trimestre aprobado</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h5>{values.nombre}</h5>
                  </td>
                  <td>
                    <h5>{values.fecha_nacimiento}</h5>
                  </td>
                  <td>
                    <h5>{values.telefono}</h5>
                  </td>
                  <td>
                    <h5>{values.documento_identidad}</h5>
                  </td>
                  <td>
                    <h5>{values.correo}</h5>
                  </td>
                  <td>
                    <h5>{values.grupo_asignado}</h5>
                  </td>
                  <td>
                    <h5>{values.fecha_ingreso}</h5>
                  </td>
                  <td>
                    <h5>{values.trimestre_actual}</h5>
                  </td>
                  <td>
                    <h5>{values.trimestre_aprobado}</h5>
                  </td>
                </tr>
              </tbody>
            </Table>
          <li><em>  Felipe Banguero Arrechea</em></li>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
