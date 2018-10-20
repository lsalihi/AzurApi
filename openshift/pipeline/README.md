This directory contains a Jenkinsfile which can be used to build
nodejs-ex using an OpenShift build pipeline.

To do this, run:

```bash
# create the nodejs example as usual
oc new-app https://github.com/lsalihi/AzurApi

# now create the pipeline build controller from the openshift/pipeline
# subdirectory
oc new-app https://github.com/lsalihi/AzurApi \
  --context-dir=openshift/pipeline --name nodejs-ex-pipeline
```
