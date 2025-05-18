import './App.css'
import { Box , Center, Heading} from '@chakra-ui/react'
import { Input, Stack } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { ColorModeButton } from "@/components/ui/color-mode"
import { Button } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { useState } from 'react'
import { CloseButton } from "@chakra-ui/react"



function App() {

  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue("#F4F4F5" , "#121212")
  const color = useColorModeValue("gray.800" ,"white")
  
  
  const [task , setTask] = useState('');
  const [tasks , setTasks] = useState([]);


  //Add

  const addTask = ()=>{
    if (task.trim()!==''){
      setTasks([...tasks, task]);
      setTask('')
    }
  }

  //Delete
  
  const deleteTask = (index)=>{
    const newTasks = [...tasks.slice(0,index), ...tasks.slice(index+1)];
    setTasks(newTasks);
  }
  return (
    <>
  

  <Center>
   <Stack align="flex-start" gap="4">
       <ColorModeButton onClick={toggleColorMode} />
        
        <Heading color={color} letterSpacing={".5em"}>ToDo</Heading>

     
    <Box p="2" bg={bg} width={"70vw"} minH="70vh" color={color} >
      <Flex gap="4" >
      <Input placeholder="Add a Task" variant="outline"  width="400px"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <Button variant="surface" onClick={addTask}>Add</Button>
      </Flex>  




      <Flex gap="4" >

    <ul>
      {tasks.map((task , index)=> (
        <Box as="li" _marker={{ color: "red" }} key={index}>
        {task}
        <CloseButton  onClick={() => deleteTask(index)} />
      </Box>
    
      ))}
  
   </ul>
     
      
      </Flex> 



      </Box>


      
    </Stack>
    </Center>

  
  
 
  
    </>


  )
}

export default App
