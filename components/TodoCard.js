import { Badge, Container } from '@mantine/core'
import React from 'react'

export default function TodoCard() {
  return (
    <Container>
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text weight={500}
            style={{textDecoration: props.todo.progress ? 'line-through' : ''}}>
                {props.todo.title}
            </Text>
            <Container>
                <Text
                    weight={500}
                    style={{textDecoration: props.todo.progress ? 'line-through' : ''}}>
                    
                    {props.todo.createdAt}
                </Text>
            </Container>
            <Badge
                color={props.todo.progress ? "green" : "pink"}
                variant="light"
            >
                {props.todo.progress ? "Complete" : "Incomplete"}
            </Badge>
        </Card>
    </Container>
  )
}
