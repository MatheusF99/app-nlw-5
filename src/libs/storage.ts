import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export interface PlantProps {
  id: string
  name: string
  about: string
  photo: string
  environments: [string]
  frequency: {
    times: string
    repeat_every: string
  }
  water_tips: string
  dateTimeNotification: Date
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmananger:plants')
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    //console.log(newPlant);


    await AsyncStorage.setItem('@plantmananger:plants',
      JSON.stringify({
        ...newPlant,
        ...oldPlants
      })
    )
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadPlant(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmananger:plants')
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const plantSorted = Object
      .keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
        }
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      )

    return plantSorted

  } catch (error) {
    throw new Error(error);
  }
}