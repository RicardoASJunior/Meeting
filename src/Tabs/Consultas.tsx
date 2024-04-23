import { VStack, Text } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Consultas(){
    return(
        <VStack>
            <CardConsulta 
                nome='Ricardo'
                foto='https://avatars.githubusercontent.com/u/112292689?v=4'
                data='22/04/2024'
            />
            <CardConsulta 
                nome='Ricardo'
                foto='https://avatars.githubusercontent.com/u/112292689?v=4'
                data='22/04/2024'
            />
        </VStack>
    )
}