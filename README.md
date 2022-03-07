# datastructures-algorithms

1. Stacks & Queues:
Stacks - stores items into last-in, first-out order
Queues - first-in, first-out order
    Push - removes the last element from an array and returns that element.
            This method changes the length of the  array.
    Pop - removes the last element from an array and returns that element.
            This method changes the length of the array.
    Enqueue
    Dequeue

            Use and array to impletemt 3 stacks
            Queue & enqueue to shift them over
            Create a queue using two stacks
            Implement gihMin() or getMax() on stack
            String of brackets

2. Linked List - organise items sequentially with each item storing a pointer to the next
    Head - Entry point, need to start here
    Singular linked list has one direction
    Value or next - point to its own value
    Tail - We don't know what's behind it unless we have a double linked list

    Linked list are a type of graph
    (e.g <64<72<95<29>) if we want to change the pointer, change the next property to point to the integer

    Hash tables often used linked list to handle collisions

                Partition a  linked list around a value
                Write a function reversing a linked list
                Cjeck if the linked list contains a cycle
                Find the kth node  

3. Hash Table - Organises data for quick look up on values for a given key
    Not orders
    Fast look ups
    Can be used to find the value of an interger - when implementing, need to define how much
    Once 50% full, need to double it

    Set - Doesn't save a value, saves a property name
    .has .get .set
    {}, Map, Set
                Count the number of occurences in the list
                Delete dupicates in a list

4. Array - Organises items sequentially in memory
    Can be looked up by key, can insert something in the middle (shift & delete in the middle of an array)

    value with _(variableName) means it's private and we should not be accessing it outside of the class.

                Rotate the matrix, sting or an array [a,b,c,d] => [c,d,a,b]
                Strings are mutable, split it into an array
                Search for the value
