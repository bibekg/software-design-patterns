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
    notes: [
      'Comparable in Java',
      'Add behavior dynamically',
      'Uses subtyping',
      'Encapsulate what varies',
      'Program to interface, not implementation',
      'Favor composition over inheritance',
      'Destroys code reuse -- by defining interfaces, every class that needs to support that interface needs to implement that functionality'
    ]
  },
  {
    name: 'Observer',
    link: 'https://sourcemaking.com/design_patterns/observer',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.',
    notes: [
      'Most GUI Object Event Handling implements this',
      'Loose coupling between data source and data dependencies',
      'Subject knows about observer through an interface',
      'Observers can be added whenever',
      'Subjects and observers can be reused and modified',
      'Publish Subscribe Model',
      'Hard to implement notifying single Observer',
      'Hard to add new type of subject'
    ]
  },
  {
    name: 'Mediator',
    link: 'https://sourcemaking.com/design_patterns/mediator',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Mediator Pattern centralizes complex communications and control between related objects',
    notes: [
      'Lots of networking protocols implement this',
      'Change in communication only mediator has to handle it',
      'Centralizes complexity',
      'Mediators can be complex',
      'Single point of failure',
      'Every subject treated differently, unlike Observer, where all treated the same'
    ]
  },
  {
    name: 'Command',
    link: 'https://sourcemaking.com/design_patterns/command',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, que or log requests, and support undoable operations.',
    notes: [
      'Transanctional Database with undo & failure recovery mode implement this',
      'Decouples requester of action from object that does action',
      'Each command a class',
      'Invoker makes request of command by calling execute()'
    ]
  },
  {
    name: 'Factory Method',
    link: 'https://sourcemaking.com/design_patterns/factory_method',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Factory Method Pattern defines an interface for creating an object but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.',
    notes: [
      'Decouples via inheritance',
      'Think types of products factories make',
      'Open for extension closed for modification',
      'Encapsulates how objects created',
      'Client code decoupled from object creation code',
      '(Dependency Inversion Principle) Depend upon abstractions, not concrete classes'
    ]
  },
  {
    name: 'Abstract Factory',
    link: 'https://sourcemaking.com/design_patterns/abstract_factory',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.',
    notes: [
      'Decouples via composition',
      'Think ingredients of a factory',
      'Use when products that belong together'
    ]
  },
  {
    name: 'Singleton',
    link: 'https://sourcemaking.com/design_patterns/singleton',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Singleton Pattern ensures a class has only one instance and provides a global point of access to it.',
    notes: [
      'Thread, resource pools and logger objects implement this',
      'Multi-Threading needs to be taken into account (Solution:Synchronized or Eager Instantiation)',
      'Private constructor and static object'
    ],
  },
  {
    name: 'Adapter',
    link: 'https://sourcemaking.com/design_patterns/adapter',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.',
    notes: [
      'Any sort of Wrapper implements this',
      'Enumeration and Iterators used in this pattern',
      'Converts interface into something adaptee can work with without actually modifying the interface'
    ]
  },
  {
    name: 'Facade',
    link: 'https://sourcemaking.com/design_patterns/facade',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The Facade Pattern provides a uniﬁed interface to a set of interfaces in a subsytem. Facade deﬁnes a higher-level interface that makes the subsystem easier to use.',
    notes: [
      'Actually alters interface to simply',
      'Decouples client implementation from any 1 subsystem',
      'Favor composition over inheritance', 'Principle of Least Knowledge'
    ]
  },
  {
    name: 'Template Method',
    link: 'https://sourcemaking.com/design_patterns/template_method',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.',
    notes: [
      'Algorithm lives in 1 place so only changes there', 'Framework for future extension',
      'Maximizes code reuse',
      'Concentrates knowledge and relies on subclasses for complete implementations',
      'Hooks are optional part of the algorithm',
      'Hollywood Principle: High-level components will call low level components',
      'Does not necessarily mean superclass: i.e. compareTo() Java',
      'Provides outline', 'Uses inheritance'
    ]
  },
  {
    name: 'State',
    link: 'https://sourcemaking.com/design_patterns/state',
    type: PATTERN_TYPES.BEHAVIORAL,
    definition: 'The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.',
    notes: [
      'Encapsulates state changes in classes',
      'Delegate to state when action occurs',
      'Easy to add states, hard to add actions',
      'Each state handles all actions',
      'Favor composition over inheritance',
      'Either state classes or client can handle state transition'
    ]
  },
  {
    name: 'Flyweight',
    link: 'https://sourcemaking.com/design_patterns/flyweight',
    type: PATTERN_TYPES.STRUCTURAL,
    definition: 'The Flyweight Pattern is used to allow one instance of a class to be reused in order to provide many "virtual instances."',
    notes: [
      'The idea is to create a single object that virtually manages the state of all other objects',
      'PRO: Decreased number of object instances at runtime',
      'PRO: Centralizes state of many virtual objects into a single location',
      'CON: Many instances must be controlled similarly',
      'CON: A single logical instance won\'t be able to behave independently of other instances'
    ]
  },
  {
    name: 'Builder',
    link: 'https://sourcemaking.com/design_patterns/builder',
    type: PATTERN_TYPES.CREATIONAL,
    definition: 'The Builder Pattern separates the construction of a complex object from its representation so that the same construction process can create different representations.',
    notes: [
      'Allows you to make fields immutable',
      'Reduces mistakes of having long list of similar API descriptions for object construction',
      'Usage process is as follows',
      [
        'Programmer calls constructor/static factory with required parameters',
        'Programmer receives BUILDER object (static member class of the class that it builds)',
        'Programmer calls setter-like methods on builder object to set optional parameters of interest',
        'Programmer calls parameterless build method to generate the object, which itself could be immutable'
      ]
    ]
  },
]

// Add diagrams and code sample images to each pattern object
patterns.forEach(pattern => {
  const patternName = pattern.name.toLowerCase().split(' ').join('-');

  try {
    const diagram = require(`../diagrams/${patternName}-diagram.png`);
    pattern.diagram = diagram;
  } catch(e) {
    // console.log(`Failed to require ../diagrams/${patternName}-diagram.png`);
  }

  try {
    const codeSample = require(`../code-samples/${patternName}-code-sample.png`);
    pattern.codeSample = codeSample;
  } catch(e) {
    // console.log(`Failed to require ../code-samples/${patternName}-code-sample.png`);
  }
})

export default patterns;
