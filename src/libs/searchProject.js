import dpndon from 'dpndon'

export default function(pkgName) {
  const dependencyTypes = ['dependencies', 'devDependencies', 'optionalDependencies', 'bundledDependencies'];
  const props = ['name', 'version', 'description', 'homepage'];
  const unpkg = true;

  return dpndon({ pkgName, dependencyTypes, props, unpkg })
    .then(dependencyInfos => createProjectInfo(pkgName, dependencyInfos))
    .catch(err => { throw err})
}

function createProjectInfo(pkgName, dependencyInfos) {
  const dependencyTypeMap = {
    dependencies: 'Production',
    devDependencies: 'Dev',
    bundledDependencies: 'Bundle',
    optionalDependencies: 'Optional'
  };
  
  const dependencies = Object.keys(dependencyTypeMap).reduce((arr, typeKey) => {
    const typeVal = dependencyTypeMap[typeKey];
    const deps = dependencyInfos[typeKey].map(d => ({
      'name': d.name,
      'version': d.version,
      'description': d.description,
      'homepage': d.homepage,
      'type': typeVal
    }));
    return [...arr, ...deps];
  }, []);

  return {
    project: {
      'name': pkgName,
    },
    dependencies: dependencies
  }
}