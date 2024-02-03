docker build -t devops_node_app .

docker run -d -p 4000:3000 devops_node_app
