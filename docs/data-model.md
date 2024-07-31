# Storage Tracker Data Model
## Table 1: Locations
- Columns
    - id (Primary Key)
    - locationName
    - locationType

## Table 2: Containers
- Columns
    - id (Primary Key)
    - locationId
    - containerName
    - fillPercentage

## Table 3: Contents
- Columns
    - id (Primary Key)
    - containerId
    - contentName
    - imageLink (url string)