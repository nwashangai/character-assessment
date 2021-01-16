import axios from 'axios';
import 'axios'

export const get = async (url: string, config?: any): Promise<any> => {
  try {
    const response = await axios.get(url, config);
    return { status: 'success', data: response.data}
  } catch (error) {
    return { status: 'error', message: error.message}
  }
}