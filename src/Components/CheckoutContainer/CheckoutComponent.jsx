import React from 'react';
import { Button, TextField } from '@mui/material';

const CheckoutComponent = ({ formik, cart, totalPrice, orderId }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      }}>
        <TextField
          id="nombre"
          label="Nombre"
          style={{
            width: 400,
            marginRight: 10,
            marginTop: 10,
          }}
          {...formik.getFieldProps('nombre')}
          
          error={formik.touched.nombre && formik.errors.nombre}
          helperText={formik.touched.nombre && formik.errors.nombre}
        />

        <TextField
          id="apellido"
          label="Apellido"
          style={{
            width: 400,
            marginRight: 10,
            marginTop: 10,
          }}
          {...formik.getFieldProps('apellido')}
          error={formik.touched.apellido && formik.errors.apellido}
          helperText={formik.touched.apellido && formik.errors.apellido}
        />

        <TextField
          id="telefono"
          label="Teléfono"
          style={{
            width: 400,
            marginRight: 10,
            marginTop: 10,
          }}
          {...formik.getFieldProps('telefono')}
          
          error={formik.touched.telefono && formik.errors.telefono}
          helperText={formik.touched.telefono && formik.errors.telefono}
        />

        <TextField
          id="correo"
          label="Correo electrónico"
          style={{
            width: 400,
            marginRight: 10,
            marginTop: 10,
          }}
          {...formik.getFieldProps('correo')}
          
          error={formik.touched.correo && formik.errors.correo}
          helperText={formik.touched.correo && formik.errors.correo}
        />

        <TextField
          id="correo2"
          label="Confirmar correo electrónico"
          style={{
            width: 400,
            marginRight: 10,
            marginTop: 10,
          }}
          {...formik.getFieldProps('correo2')}
          
          error={formik.touched.correo2 && formik.errors.correo2}
          helperText={formik.touched.correo2 && formik.errors.correo2}
        />
        <div className="checkout-button">
          <Button variant="contained" color="primary" type="submit" style={{
            width: 400,
            marginRight: 10,
            marginTop: 10,
          }}>
            Enviar
          </Button>
        </div>
        <table style={{ borderCollapse: 'collapse', width: 400, marginTop: 30 }}>
            <thead>
              <tr style={{ backgroundColor: '#ccc' }}>
                <th style={{ padding: '8px', textAlign: 'left' }}>Producto</th>
                <th style={{ padding: '8px', textAlign: 'left' }}>Cantidad</th>
                <th style={{ padding: '8px', textAlign: 'left' }}>Precio unitario</th>
                <th style={{ padding: '8px', textAlign: 'left' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.nombre}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.quantity}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.precio}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.quantity * item.precio}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>Total a pagar:</td>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>{totalPrice}</td>
              </tr>
            </tbody>
          </table>

      {orderId && (
        <div className="order-confirmation" style={{color: "green"}}>
          Pedido realizado, id de la orden: <b>{orderId}</b>
        </div>
      )}
      </div>
      

      
    </form>
  );
};

export default CheckoutComponent;
