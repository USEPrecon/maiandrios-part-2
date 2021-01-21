<template>
    <div class="DisplayCarrierCodeTable">
            <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th scope="col">
                        <button type="button" class="btn btn-labeled btn-success">
                            <span class="btn-label"><i class="bi bi-plus-square"></i></span>
                            Add Entry
                        </button>
                    </th>
                </tr>
                <tr>
                <th scope="col">Discription</th>
                <th scope="col">Code</th>
                <th scope="col">Conditions</th>
                <th scope="col">Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Advance:</th>
                    <td>40</td>
                    <td>
                        <div class="form-check">
                        <input
                            class="form-check-input position-static"
                            type="checkbox"
                            id="blankCheckbox"
                            value="option1"
                            aria-label="..."
                        />
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-primary" type="submit">Button</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.btn-label {position: relative;left: -12px;display: inline-block;padding: 6px 12px;background: rgba(0,0,0,0.15);border-radius: 3px 0 0 3px;}
.btn-labeled {padding-top: 0;padding-bottom: 0;}
.btn { margin-bottom:10px; }
</style>