import type { ReactNode } from 'react'
import { Card, Col, Row } from 'antd';

import styles from "./styles.module.css"

interface CardsContainerProps {
    children: ReactNode;
    gutter?: [number, number];
}
  
interface CardsItemProps {
    children: ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export function CardsContainer({ children, gutter = [16, 16] }: CardsContainerProps) {
    return <Row gutter={gutter} className={styles.scrollContainer}>{children}</Row>;
}


CardsContainer.Item = function CardsItem({ 
    children, 
    xs = 24, 
    sm = 12, 
    md = 8, 
    lg = 6 
  }: CardsItemProps) {
    return (
      <Col xs={xs} sm={sm} md={md} lg={lg}>
        {children}
      </Col>
    );
  };
