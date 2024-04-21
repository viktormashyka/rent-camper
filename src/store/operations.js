import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'api/api-config';

axios.defaults.baseURL = BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('campers');
      console.log('fetchCampers, data => ', data); // TODO: remove this
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamper',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCamper = createAsyncThunk(
  'campers/addCamper',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('campers', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCamper = createAsyncThunk(
  'campers/updateCamper',
  async ({ id, body }, thunkAPI) => {
    console.log('id => ', id, 'body =>', body);
    try {
      const { data } = await axios.put(`campers/${id}`, body);
      console.log('updated data => ', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCamper = createAsyncThunk(
  'campers/deleteCamper',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
