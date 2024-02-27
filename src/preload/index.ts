import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the Browser window');
}


try {
  contextBridge.exposeInMainWorld('context', {
    // TODO: 
  }) 
} catch (error) {
  console.error(error);
}