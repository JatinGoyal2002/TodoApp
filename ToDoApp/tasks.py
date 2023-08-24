from celery import Celery

# app = Celery('tasks', broker='pyamqp://guest@localhost//')
app = Celery('tasks', backend='rpc://', broker='pyamqp://')

@app.task(typing = False)
def add(x, y):
    return x+y

@app.task
def tsum(numbers):
    return sum(numbers)

# @app.task(bind=True)
# def dump_context(self, x, y):
#     print('Executing task id {0.id}, args: {0.args!r} kwargs: {0.kwargs!r}'.format(
#             self.request))
#     return x+ y;

# from celery import Celery
# app = Celery()

# @app.task
# def add(x, y): return x + y

# if __name__ == '__main__':
#     args = ['worker', '--loglevel=INFO']
#     app.worker_main(argv=args)