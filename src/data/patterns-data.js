import strategyDiagram from '../diagrams/strategy-diagram.png';
import observerDiagram from '../diagrams/observer-diagram.png';
import mediatorDiagram from '../diagrams/mediator-diagram.png';
import factoryMethodDiagram from '../diagrams/factory-method-diagram.png';
import abstractFactoryDiagram from '../diagrams/abstract-factory-diagram.png';
import singletonDiagram from '../diagrams/singleton-diagram.png';
import commandDiagram from '../diagrams/command-diagram.png';
import adapterDiagram from '../diagrams/adapter-diagram.png';
import facadeDiagram from '../diagrams/facade-diagram.png';
import templateMethodDiagram from '../diagrams/template-method-diagram.png';
import stateDiagram from '../diagrams/state-diagram.png';

export const PATTERN_TYPES = {
  BEHAVIORAL: 'BEHAVIORAL',
  STRUCTURAL: 'STRUCTURAL',
  CREATIONAL: 'CREATIONAL'
}

const patterns = [
  {
    name: 'Strategy',
    link: 'https://sourcemaking.com/design_patterns/strategy',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Strategy Pattern defines a family of algorithms, encapsulate each one, and make them interchangeale. Lets the algorithm vary indpendently from the clients that use it.',
    diagram: strategyDiagram,
    pros: [],
    cons: [
      'Destroys code reuse -- by defining interfaces, every class that needs to support that interface needs to implement that functionality'
    ],
    notes: [],
  },
  {
    name: 'Observer',
    link: 'https://sourcemaking.com/design_patterns/observer',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.',
    diagram: observerDiagram,
    pros: [
      'Loose coupling between data source and data dependencies'
    ],
    cons: [],
    notes: []
  },
  {
    name: 'Mediator',
    link: 'https://sourcemaking.com/design_patterns/mediator',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Mediator Pattern centralizes complex communications and control between related objects',
    diagram: mediatorDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'Factory Method',
    link: 'https://sourcemaking.com/design_patterns/factory_method',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Factory Method Pattern defines an interface for creating an object but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.',
    diagram: factoryMethodDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'Abstract Factory',
    link: 'https://sourcemaking.com/design_patterns/abstract_factory',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.',
    diagram: abstractFactoryDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'Singleton',
    link: 'https://sourcemaking.com/design_patterns/singleton',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Singleton Pattern ensures a class has only one instance and provides a global point of access to it.',
    diagram: singletonDiagram,
    pros: [],
    cons: [],
    notes: [],
  },
  {
    name: 'Command',
    link: 'https://sourcemaking.com/design_patterns/command',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, que or log requests, and support undoable operations.',
    diagram: commandDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'Adapter',
    link: 'https://sourcemaking.com/design_patterns/adapter',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.',
    diagram: adapterDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'Facade',
    link: 'https://sourcemaking.com/design_patterns/facade',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The Facade Pattern provides a uniﬁed interface to a set of interfaces in a subsytem. Facade deﬁnes a higher-level interface that makes the subsystem easier to use.',
    diagram: facadeDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'Template Method',
    link: 'https://sourcemaking.com/design_patterns/template_method',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.',
    diagram: templateMethodDiagram,
    pros: [],
    cons: [],
    notes: []
  },
  {
    name: 'State',
    link: 'https://sourcemaking.com/design_patterns/state',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.',
    diagram: stateDiagram,
    pros: [],
    cons: [],
    notes: []
  },
]

export default patterns;
