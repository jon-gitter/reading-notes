[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Component-Based Architecture
https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm

1. What is a “component”?
  - a modular, portable, replaceable, and reusable set of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface.
  - a software object, intended to interact with other components, encapsulating certain functionality or a set of functionalities
  - has a obviously defined interface and conforms to a recommended behavior common to all components within an architecture
2. What are the characteristics of a component?
  - reusability
  - replaceable
  - not context specific
  - extensible
  - encapsulated
  - independent
3. What are the advantages of using component-based architecture?
  - provides a higher level of abstraction and divides the problem into sub-problems, each associated with component partitions
  - ease of deployment
  - reduced cost
  - ease of development
  - reusable
  - modification of technical complexity
  - reliability
  - system maintenance and evolution
  - independent


## What is Props and How to Use it in React
https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0#:~:text=%E2%80%9CProps%E2%80%9D%20is%20a%20special%20keyword,way%20from%20parent%20to%20child

1. What is “props” short for?
  - properties
2. How are props used in React?
  - used for passing data from one component to another
3. What is the flow of props?
  - unidirectional 

- define attributes and values with interpolation {}:
  - ex: `<ChildComponent someAttribute={value} anotherAttribute={value}/>`
- Props are arguments passed into React components

- ex of final code using props:
``` 
class ParentComponent extends Component { 
  render() {
    return (
      <h1>
        I'm the parent component.
        <ChildComponent text={"I'm the 1st child"} />
        <ChildComponent text={"I'm the 2nd child"} />
        <ChildComponent text={"I'm the 3rd child"} />
      </h1>
    );
  }
}
```

Summary:
- Props stand for properties and is a special keyword in React
- Props are being passed to components like function arguments
- Props can only be passed to components in one way (parent to child)
- Props data is immutable (read-only)




[Table of Contents](https://jon-gitter.github.io/reading-notes/)