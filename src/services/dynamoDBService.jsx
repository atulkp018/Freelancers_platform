import { dynamoDB } from './awsConfig';

export const getProjects = async () => {
  const params = {
    TableName: 'Projects',
  };
  try {
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
};

export const createProject = async (projectData) => {
  const params = {
    TableName: 'Projects',
    Item: projectData,
  };
  try {
    await dynamoDB.put(params).promise();
    console.log('Project created:', projectData);
  } catch (err) {
    console.error('Error creating project:', err);
  }
};
