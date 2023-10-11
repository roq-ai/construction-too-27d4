import queryString from 'query-string';
import { OutletInterface, OutletGetQueryInterface } from 'interfaces/outlet';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOutlets = async (query?: OutletGetQueryInterface): Promise<PaginatedInterface<OutletInterface>> => {
  return fetcher('/api/outlets', {}, query);
};

export const createOutlet = async (outlet: OutletInterface) => {
  return fetcher('/api/outlets', { method: 'POST', body: JSON.stringify(outlet) });
};

export const updateOutletById = async (id: string, outlet: OutletInterface) => {
  return fetcher(`/api/outlets/${id}`, { method: 'PUT', body: JSON.stringify(outlet) });
};

export const getOutletById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/outlets/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOutletById = async (id: string) => {
  return fetcher(`/api/outlets/${id}`, { method: 'DELETE' });
};
