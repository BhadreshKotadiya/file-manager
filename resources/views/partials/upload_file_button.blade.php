<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light"></span> File upload
    </h4>

    <div class="row">
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-body">
                    <form action="/upload" class="dropzone needsclick" id="dropzone-basic">
                        <div class="dz-message needsclick">
                            Drop files here or click to upload
                            {{-- <span class="note needsclick">(This is just a demo dropzone. Selected files
                                are
                                <strong>not</strong> actually uploaded.)</span> --}}
                        </div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#pricingModal"><i class="ti ti-upload"></i> Upload media
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
