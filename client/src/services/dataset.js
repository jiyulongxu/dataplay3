import request from '@/utils/request';

export async function queryDatasets() {
  return request('/api/datasets');
}

export async function queryDataset(id) {
  return request(`/api/datasets/${id}`);
}

export async function runDatasetQuery(params) {
  const { dataset, ...restParams } = params;
  return request(`/api/datasets/${dataset}/query`, {
    method: 'POST',
    body: restParams,
  });
}

export async function createDataset(params) {
  return request(`/api/datasets`, {
    method: 'POST',
    body: params,
  });
}

export async function deleteDataset(id) {
  return request(`/api/datasets/${id}`, {
    method: 'DELETE',
  });
}

export async function query2dataset(params) {
  return request(`/api/query2dataset`, {
    method: 'POST',
    body: params,
  });
}
