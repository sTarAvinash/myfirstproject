import { Container, Loader, TextInput, Button, Modal } from '@mantine/core'
import TodoCard from 'components/TodoCard'
import React, { useState } from 'react'

export default function TodoHome() {
    const [isLoading, setIsLoading] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [opened, setOpened] = useState(false)
    const [newTask, setNewTask] = useState({ title: '', description: '' })
    

    if (isLoading) {
        return <div className="center"><Loader /></div>
    }
    return (
        <Container>
            <Container>
                <TextInput
                    label="Todo Name"
                    onChange={(event) => {
                        setSearchText(event.currentTarget.value)
                    }}
                />
            </Container>
            <Container style={{ marginTop: 5 }}>
                <Button color="indigo" radius="xl" size="xs"
                    onClick={() => setOpened(true)}
                >
                    +
                </Button>
            </Container>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Add Todo"
            >
                <TextInput
                    label="Title"
                    onChange={(event) => setNewTask({ ...newTask, "title": event.currentTarget.value })}
                />
                <TextInput
                    label="Description"
                    onChange={(event) => setNewTask({ ...newTask, "description": event.currentTarget.value })}
                />
                <Button
                    mt={10}
                    variant="gradient"
                    gradient={{ from: 'teal', to: 'limegreen', deg: 105 }}
                >
                    Add
                </Button>

            </Modal>
        </Container>
    )
}
