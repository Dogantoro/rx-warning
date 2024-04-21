#pragma once
#include "json-mgr.h"
#include <unordered_map>

class AdjList {
private:
    std::unordered_map<std::string, DrugInfo> graph;


public:
    void addEdge(std::string from, std::string to, std::string interType);
    int getSize() {
        return (int)(graph.size());
    }
    std::vector<InteractionDesc> getInteractions(std::string drug) {
        return graph[drug].DrugInfo::interactions;
    }

    bool ifDrug(std::string drug) {
        return graph.find(drug) != graph.end();
    }
    DrugInfo getDrugInfo(std::string drug) {
            return graph[drug];
    }
};

void AdjList::addEdge(std::string from, std::string to, std::string interType){
    DrugInfo drug1, drug2;
    drug1.name = from;
    drug2.name = to;
    graph[from] = drug1;
    graph[to] = drug2;
    InteractionDesc inter1 = {to, convert(interType)};
    InteractionDesc inter2 = {from, convert(interType)};
    graph[from].DrugInfo::interactions.push_back(inter1);
    graph[to].DrugInfo::interactions.push_back(inter2);
}

