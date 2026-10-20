import type { ReactNode } from 'react'
import { Card } from 'antd';

interface ViewCardProps {
    title?: string;
    content?: ReactNode;
}

export function ViewCard({ title, content}: ViewCardProps){
    return(
        <Card title={title} hoverable>
            {content}
        </Card>
    )
}