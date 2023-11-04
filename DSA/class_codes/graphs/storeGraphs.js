class Graph{
    constructor(){
        this.nodes = new Map();
    }

    // add a node in graph
    addNode(node){
        if(!this.nodes.has(node)){
            this.nodes.set(node,[]);
        }
    }

    // add an edge between nodes
    addEdge(node1,node2,weight){
        if(this.nodes.has(node1) && (this.nodes.has(node2))){
            this.nodes.get(node1).push({wt:weight,node:node2});
            this.nodes.get(node2).push({wt:weight,node:node1});
        }
    }

    // get the neighbours of a node
    getNeighbours(node){
        if(this.nodes.has(node)){
            return this.nodes.get(node);
        }
        return null;
    }

    // check if an edge exists between two nodes
    hasEdge(node1,node2){
        if(this.nodes.has(node1)){
            return this.nodes.get(node1).includes(node2);
        }
        return false;
    }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addEdge(1,2,10);
graph.addEdge(1,4,20);
graph.addEdge(2,3,30);
graph.addEdge(2,5,40);
graph.addEdge(2,4,50);
graph.addEdge(3,4,60);
graph.addEdge(3,5,70);
console.log(graph.getNeighbours(5));
console.log(graph.hasEdge(5,2));
console.log(graph.nodes);