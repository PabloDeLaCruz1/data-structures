require "pry"

class Queue
  def initialize
    @list = []
    @tail = 0
  end

  def enqueue(v)
    @list[@tail] = v
    @tail += 1
  end

  def dequeue
    v = @list.shift()
    @tail -= 1
    v
  end

  def show
    @list.to_s
  end
end
