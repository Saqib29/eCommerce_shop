import React from 'react'
import { Form } from 'react-bootstrap';

const CustomSelectForm = ({ qty, onChange, countInStock }) => {
  return (
    <Form.Control
      as="select"
      value={qty}
      onChange={onChange}
      className="custom-select-control"
    >
      {[...Array(countInStock).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {' '}
          {x + 1}{' '}
        </option>
      ))}
    </Form.Control>
  );
}

export default CustomSelectForm
