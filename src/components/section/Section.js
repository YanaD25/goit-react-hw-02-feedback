import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Title from './Section.component';



const Section = ({ title, children }) => (
  <section>
    <Title>{title}</Title>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
